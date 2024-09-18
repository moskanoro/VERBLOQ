// lib/firebaseAdmin.js

import admin from 'firebase-admin';

const serviceAccount = {
  "type": "service_account",
  "project_id": "verbloq-ce3dd",
  "private_key_id": "22179c6a2067c78595af5903f2ccd82d674578f0",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC01qUuTYtZr86m\nqBTFTQtHTDTCMkJ7f76gfMG70TFcsDN3p7cdpmNXdmO0m/kz7QJLC+89reWHnfP/\n0V1AL3AnEY5j4iBaCSDmoWkUqlpdOgNnjLEz6W2H/dTIIZ4QW21n0j2Kb4m+uuGS\nB1NMcwcatr4WGsofdXuL2G0/K7BX3QA7D9vZaAEvkJQO9u+uzlyQ6Vg06XcCCdNf\nvra7wycMZ+Yrx8QDxU4WS5rs1U+khSpXRw2ifBLuIXwx4izwp2uIGK2M1ErZtb46\nw+K8prDm08qi/XrkcjxDoNiONNE0lSdXfiOt7iQluS1GzWPB3XzxI2V82PER/0Ye\n6Z/BeKvVAgMBAAECggEAFH/ii1xXUsw8U6W+blvx+TFD0ncfvzU3dvo9fJzVs36h\nOaFa/4hIPvbDjbVCq3wPZFIkMCyW1j1LFsb1LbH9ojLPc+DYhFcAPPSzie1Xv2AK\nA8KDUfGrrMdS8s7mG/o+mDl70sYbFMfFi1K7mBvQBIYOXUjIfIbKVwt/3YcxKdHJ\nrdRpmtgQVJuYjpVc+cuNnZMHxNdphL2b4/ckCTN0BxPdvAoI/POcBCYTz6muALz2\nd/3e/y/iBj53SEHT1X3fQNMtZ4VomGgl8nQHUTXpM5nhQQj+Y0q7ZX3jPvwnw2jl\nDKZ5fARDfV7WMjymyQOP0S/S1tN8XGr8HBNNvVi6rwKBgQDgBZwzhopK3Z4WYmDL\nI6siSxQT+yrCTEecK6kxQv7vmlINVHaqjFa9skWzrf3HCwdAf9k4LcTt+kRYkIaY\nQ+2RCBC2K2a2Eo+HiygBc+faoteWg6p+a0O04iwxO9QcRG79QqfJ7msaQbaVQxvV\ng5FwDAchjxtPNdrjhEHz0Ilq+wKBgQDOpv2EkdJ6dZSEIn7l9IXlzd8NbdWqf8q0\niIBSEJBBoI0I8WvoT8FHFocdFbRGzDGBZgZlCywc9aOHaNR/zIY7SESJdjOfjAJ2\nQNAzvFu4Je8u5K8b0i3Md/QFs/lilFEVjcxbz2fytO8WfLHwjeV48Ajkk3ntAaCK\nCMy4oNeLbwKBgDG/zTJ8HFYH5UWfT1ONdkHFXo4ZZyODARwjbg1sjWT0Zmhja37w\nb4rs/iGq8AK15kRioACj2Wnn/CmW3u0NmMJugheSh9rDQHCfbKD19nVNWIcqckBk\n3cJbv+inGrG0WNmRZeWoNsy77yoynwnJkBDL+wFu4Ge01AlWo7bbhsjlAoGBAMHI\ntlNqqwVK3UpLTtQ0yJsGwvPE22hXDa7dkfdisOPZumd4fMgMgiI3bdxIThVVxdah\n5b07DNLbRc3k7+An2ngc/Kgqv54NnQFnJdZd+2Rjrjc7Gznrjib/FUWDz4gxrReZ\nMNmnVMK0CL/9jp8VcOpHrQ8rfFpT/Ed0mQVJTtbhAoGBAJGDAJgyX+aYOsqyQ98J\nM7rp3klysZ6GVbpfd5ebZor2I1hSWWsVzRfaq5oB/OFMJfsGdDk2c38FM5w393ue\n/VqX9kc0AXNjX1WdF2kr9eyheNNjTpqb5ZgmrkULlWQUIGozK1YVpInGIAgAMaIu\nnHbYdiAsRjG5UoLRlC6/rfK1\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-9poka@verbloq-ce3dd.iam.gserviceaccount.com",
  "client_id": "117078137406657124325",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-9poka%40verbloq-ce3dd.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const authAdmin = admin.auth();
