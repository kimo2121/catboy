import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { injectedConnector, networkConnector } from "../utils/connectors"
import { toast } from 'react-hot-toast'
import { currentNetwork } from 'utils'

let connector = null;
connector = networkConnector;

const useAuth = () => {
  const { library, chainId, activate, deactivate } = useWeb3React()

  const login = useCallback(async (walletId = 0) => {
    connector = injectedConnector;

    await activate(connector);
    if (library && chainId != parseInt(currentNetwork)) {
      toast.error("Unsupported Network. This platform is working on Binance Smart Chain");
    }
  }, [activate, library, chainId])

  const logout = useCallback(() => {
    deactivate()
  }, [deactivate])

  return { login, logout }
}

export default useAuth
