import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';

const SimpleCardForm = ({ handlePayment }: { handlePayment: (paymentId: string) => void }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState<string>("")
    const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false)

    const handleSubmit = async (event: any) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement as StripeCardElement,
        });

        if (error) {
            setPaymentError('Payment Error');
            setPaymentSuccess(false)
        } else {
            setPaymentSuccess(!!paymentMethod?.id)
            setPaymentError('')
            // console.log(paymentMethod)
            handlePayment((paymentMethod?.id) as string)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: 'green' }}>Your payment was successful</p>
            }
        </div>
    );
};
export default SimpleCardForm;