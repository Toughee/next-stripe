import fetcher from '../lib/fetcher'

async function confirmPaymentIntent(id, body) {
  return await fetcher({
    body: { id, body },
    method: 'POST',
    url: `/api/stripe/confirm/payment-intent`
  })
}

async function createBillingPortalSession(body) {
  return await fetcher({
    body,
    method: 'POST',
    url: `/api/stripe/create/billing-portal-session`
  })
}
async function createCheckoutSession(body) {
  return await fetcher({
    body,
    method: 'POST',
    url: `/api/stripe/create/checkout-session`
  })
}

async function createPaymentIntent(body) {
  return await fetcher({
    body,
    method: 'POST',
    url: `/api/stripe/create/payment-intent`
  })
}

async function retrievePaymentIntent(id) {
  return await fetcher({
    body: { id },
    method: 'GET',
    url: `/api/stripe/retrieve/payment-intent`
  })
}

async function updatePaymentIntent(id, body) {
  return await fetcher({
    body: { id, body },
    method: 'POST',
    url: `/api/stripe/update/payment-intent`
  })
}

export default {
  confirmPaymentIntent,
  createBillingPortalSession,
  createCheckoutSession,
  createPaymentIntent,
  retrievePaymentIntent,
  updatePaymentIntent
}
