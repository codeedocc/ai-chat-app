import admin from 'firebase-admin'
import { getApps } from 'firebase-admin/app'

const serviceAccout = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
)

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccout),
  })
}

const adminDb = admin.firestore()

export { adminDb }
