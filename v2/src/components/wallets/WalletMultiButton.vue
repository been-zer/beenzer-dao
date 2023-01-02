<script lang="ts">
import { computed, defineComponent, ref, toRefs, watchEffect } from "vue";
import { onClickOutside, useClipboard } from "@vueuse/core";
import { useWallet } from "../../services/wallets/useWallet";
import WalletConnectButton from "./WalletConnectButton.vue";
import WalletIcon from "./WalletIcon.vue";
import WalletModalProvider from "./WalletModalProvider.vue";
import CurrencySwitcher from "./CurrencySwitcher.vue";
import { balanceBEEN, balanceSOL, balanceUSD } from '../../services/wallets/getBalances';
import { PublicKey } from '@solana/web3.js';
import { formatNumber } from "../../utils";
import store from '../../store';

export default defineComponent({
  components: {
    WalletConnectButton,
    WalletIcon,
    WalletModalProvider,
    CurrencySwitcher,
  },
  props: {
    featured: { type: Number, default: 3 },
    container: { type: String, default: "body" },
    logo: String,
    dark: Boolean,
  },
  setup(props) {
    const { featured, container, logo, dark } = toRefs(props);
    const { publicKey, wallet, disconnect } = useWallet();
    
    const dropdownPanel = ref<HTMLElement>();
    const dropdownOpened = ref(false);
    const openDropdown = () => {
      dropdownOpened.value = true;
    };
    const closeDropdown = () => {
      dropdownOpened.value = false;
    };
    onClickOutside(dropdownPanel, closeDropdown);
    
    const publicKeyBase58 = computed(() => publicKey.value?.toBase58());
    const publicKeyTrimmed = computed(() => {
      if (!wallet.value || !publicKeyBase58.value) {
        store.dispatch('setWallet', '');
        return null;
      }
      store.dispatch('setWallet', String(publicKeyBase58.value));
      console.log('wallet', publicKeyBase58.value);
      return (
        publicKeyBase58.value.slice(0, 4) +
        ".." +
        publicKeyBase58.value.slice(-4)
      );
    });
      
    const walletTokens = ref(0);
    const walletBalance = ref(0);
    watchEffect( async () => {
      walletTokens.value = await balanceBEEN(publicKey.value as PublicKey)
      walletBalance.value = await balanceSOL(publicKey.value as PublicKey);
    })
    const getBalances = async () => {
      walletTokens.value = await balanceBEEN(publicKey.value as PublicKey)
      if ( store.state.currency === 'SOL' ) {
        walletBalance.value = await balanceSOL(publicKey.value as PublicKey);
      } else if ( store.state.currency === 'USD' ) {
        walletBalance.value = await balanceUSD(publicKey.value as PublicKey);
      }
    }
    
    const deleteWalletStore = () => {
      store.dispatch('setWallet', '');
    }

    const {
      copy,
      copied: addressCopied,
      isSupported: canCopy,
    } = useClipboard();
    const copyAddress = () =>
      publicKeyBase58.value && copy(publicKeyBase58.value);

    // Define the bindings given to scoped slots.
    const scope = {
      featured,
      container,
      logo,
      dark,
      wallet,
      publicKey,
      publicKeyTrimmed,
      publicKeyBase58,
      canCopy,
      addressCopied,
      dropdownPanel,
      dropdownOpened,
      openDropdown,
      closeDropdown,
      formatNumber,
      walletTokens,
      walletBalance,
      getBalances,
      copyAddress,
      disconnect,
      deleteWalletStore,
      store
    };

    return {
      scope,
      ...scope,
    };
  },
});
</script>

<template>
  <wallet-modal-provider
    :featured="featured"
    :container="container"
    :logo="logo"
    :dark="dark"
  >
    <template #default="modalScope">
      <slot v-bind="{ ...modalScope, ...scope }">
        <button
          v-if="!wallet"
          class="swv-button swv-button-trigger"
          @click="modalScope.openModal"
        >
          Select Wallet
        </button>
        <wallet-connect-button
          v-else-if="!publicKeyBase58"
        ></wallet-connect-button>
        <div v-else class="swv-dropdown">
          <slot name="dropdown-button" v-bind="{ ...modalScope, ...scope }">
            <button
              class="swv-button swv-button-trigger"
              :style="{ pointerEvents: dropdownOpened ? 'none' : 'auto' }"
              :aria-expanded="dropdownOpened"
              :title="publicKeyBase58"
              @click="openDropdown"
            >
              <wallet-icon :wallet="wallet"></wallet-icon>
              <p v-text="publicKeyTrimmed"></p>
            </button>
          </slot>
          <slot name="dropdown" v-bind="{ ...modalScope, ...scope }">
            <ul
              aria-label="dropdown-list"
              class="swv-dropdown-list"
              :class="{ 'swv-dropdown-list-active': dropdownOpened }"
              ref="dropdownPanel"
              role="menu"
            >
              <slot name="dropdown-list" v-bind="{ ...modalScope, ...scope }">
                <li
                  @click="getBalances"
                  class="swv-dropdown-list-item"
                  role="menuitem"
                >
                  <div class="currency-switcher">
                    <div class="symbol">
                      SOL
                    </div>
                    <div>
                      <CurrencySwitcher/>
                    </div>
                    <div class="symbol">
                      USD
                    </div>
                  </div>
                </li>
                <li
                  @click="getBalances"
                  class="swv-dropdown-list-item text-green-300 text-semibold"
                  role="menuitem"
                >
                  {{`${formatNumber(walletBalance)} ${store.state.currency}`}}
                </li>
                <li
                  @click="getBalances"
                  class="swv-dropdown-list-item text-green-300 text-semibold"
                  role="menuitem"
                >
                  {{`${formatNumber(walletTokens)} BEEN`}}
                </li>
                <li
                  v-if="canCopy"
                  @click="copyAddress"
                  class="swv-dropdown-list-item"
                  role="menuitem"
                >
                  {{ addressCopied ? "Copied" : "Copy address" }}
                </li>
                <li
                  @click="
                    modalScope.openModal();
                    closeDropdown();
                  "
                  class="swv-dropdown-list-item"
                  role="menuitem"
                >
                  Change wallet
                </li>
                <li
                  @click="
                    disconnect();
                    closeDropdown();
                    deleteWalletStore();
                  "
                  class="swv-dropdown-list-item"
                  role="menuitem"
                >
                  Disconnect
                </li>
              </slot>
            </ul>
          </slot>
        </div>
      </slot>
    </template>

    <!-- Enable modal overrides. -->
    <template #overlay="modalScope">
      <slot name="modal-overlay" v-bind="{ ...modalScope, ...scope }"></slot>
    </template>
    <template #modal="modalScope">
      <slot name="modal" v-bind="{ ...modalScope, ...scope }"></slot>
    </template>
  </wallet-modal-provider>
</template>
