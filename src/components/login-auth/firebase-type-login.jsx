import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore'
import detectEthereumProvider from '@metamask/detect-provider'

async function as_() {
  if (!window.ethereum)
    window.open(
      'https://metamask.app.link/dapp/friedphysicist.github.io/WebGL_Holder/'
    )

  const _provider = await detectEthereumProvider()
  {
    const acc = await _provider.request({ method: 'eth_requestAccounts' })

    let str_acc = String(acc)
    console.log(acc)

    const firebaseApp = initializeApp({
      apiKey: 'AIzaSyC3xIewA0y4WGFVtWcIzxkQ67ONeknibhE',
      authDomain: 'roboclash-webwhitelist.firebaseapp.com',
      projectId: 'roboclash-webwhitelist',
    })

    const db = getFirestore()
    const _ref = doc(db, 'WhiteListMembers', 'Wallets')

    const list_ = await updateDoc(_ref, { WalletID: arrayUnion(str_acc) })

    console.log('Document written with ID: ', list_)
    alert('You have succesfully joined to RoboClash WhiteList with ' + acc)
  }
}

export default as_
