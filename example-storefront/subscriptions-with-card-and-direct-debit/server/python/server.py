#! /usr/bin/env python3.6

"""
server.py
Stripe Recipe.
Python 3.6 or newer required.
"""

import stripe
import json
import os

from flask import Flask, render_template, jsonify, request, send_from_directory
from dotenv import load_dotenv, find_dotenv

# Setup Stripe python client library
load_dotenv(find_dotenv())
stripe.api_key = os.getenv('STRIPE_SECRET_KEY')
stripe.api_version = os.getenv('STRIPE_API_VERSION')

static_dir = str(os.path.abspath(os.path.join(
    __file__, "..", os.getenv("STATIC_DIR"))))
app = Flask(__name__, static_folder=static_dir,
            static_url_path="", template_folder=static_dir)


@app.route('/', methods=['GET'])
def get_index():
    return render_template('index.html')


@app.route('/config', methods=['GET'])
def get_config():
    plan = stripe.Plan.retrieve(os.getenv('SUBSCRIPTION_PLAN_ID'))
    return jsonify(
        publishableKey=os.getenv('STRIPE_PUBLISHABLE_KEY'),
        plan=plan
    )


@app.route('/create-customer', methods=['POST'])
def create_customer():
    # Reads application/json and returns a response
    data = json.loads(request.data)
    try:
        # Create a new customer object
        customer = stripe.Customer.create(
            name=data['name'],
            email=data['email']
        )
        # At this point, associate the ID of the Customer object with your
        # own internal representation of a customer, if you have one.
        print(customer)

        # Create a SetupIntent to set up our payment methods recurring usage
        setup_intent = stripe.SetupIntent.create(
            payment_method_types=['card', 'au_becs_debit'],
            customer=customer.id
        )
        return jsonify(
            customer=customer,
            setupIntent=setup_intent
        )
    except Exception as e:
        return jsonify(error=str(e)), 403


@app.route('/subscription', methods=['POST'])
def getSubscription():
    data = json.loads(request.data)
    try:
        # Set the default payment method on the customer
        stripe.Customer.modify(
            data['customerId'],
            invoice_settings={
                'default_payment_method': data['paymentMethodId'],
            },
        )
        # Create the subscription
        subscription = stripe.Subscription.create(
            customer=data['customerId'],
            items=[
                {
                    'plan': os.getenv('SUBSCRIPTION_PLAN_ID')
                }
            ],
            expand=['latest_invoice.payment_intent']
        )
        return jsonify(subscription)
    except Exception as e:
        return jsonify(error=str(e)), 403


@app.route('/webhook', methods=['POST'])
def webhook_received():
    # You can use webhooks to receive information about asynchronous payment events.
    # For more about our webhook events check out https://stripe.com/docs/webhooks.
    webhook_secret = os.getenv('STRIPE_WEBHOOK_SECRET')
    request_data = json.loads(request.data)

    if webhook_secret:
        # Retrieve the event by verifying the signature using the raw body and secret if webhook signing is configured.
        signature = request.headers.get('stripe-signature')
        try:
            event = stripe.Webhook.construct_event(
                payload=request.data, sig_header=signature, secret=webhook_secret)
            data = event['data']
        except Exception as e:
            return e
        # Get the type of webhook event sent - used to check the status of PaymentIntents.
        event_type = event['type']
    else:
        data = request_data['data']
        event_type = request_data['type']

    data_object = data['object']

    if event_type == 'customer.created':
        print(data)

    if event_type == 'customer.updated':
        print(data)

    if event_type == 'invoice.upcoming':
        print(data)

    if event_type == 'invoice.created':
        print(data)

    if event_type == 'invoice.finalized':
        print(data)

    if event_type == 'invoice.payment_succeeded':
        print(data)

    if event_type == 'invoice.payment_failed':
        print(data)

    if event_type == 'customer.subscription.created':
        print(data)

    return jsonify({'status': 'success'})


if __name__ == '__main__':
    app.run(port=4242)
