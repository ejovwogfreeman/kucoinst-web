import React from "react";
import "../css/Help.css";

const Help = () => {
  return (
    <div className="trades-container">
      <h3 className="text-center mb-lg-4 my-3 fw-bold">HELP/FAQ</h3>
      <div className="accordion" id="accordionExample" data-aos="fade-down">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h5 className="m-0">
                Why does the converted amount of assets change?
              </h5>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The equivalent calculation in the asset is the value of the
              current holding digital currency converted into USDT, which
              changes due to the price fluctuation of the digital asset. The
              number of your digital assets has not changed.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h5 className="m-0">
                Forgot the funds password processing method for platform
                transactions
              </h5>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              If you forget the platform transaction fund password, please go to
              My-Settings-Click to set the fund password, or contact customer
              service to reset
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h5 className="m-0">Privacy Policy</h5>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Purpose and Basis. In order to provide the services of the
              Platform to Users, KuCoin needs to collect some of your personal
              information when you register with the Platform, log in to the
              Platform and/or use the services offered by the Platform. This
              Privacy Policy, in combination with KuCoinrsquo;s other applicable
              policies, set out the rules as to the use and protection of the
              collected information in order to prevent misuse.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h5 className="m-0">Legal Notices</h5>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              KuCoin will respond to all law enforcement requests from
              authorized law enforcement officials and provide proof of
              authorization. These law enforcement request guidelines outline
              how authorized law enforcement officials can engage and contact us
              to request customer information. To facilitate processing, we
              require that these requests be specific to the legal entity. If
              law enforcement is unsure of the entity to which a request needs
              to be directed, please outline all identified legal entities and,
              if cross-border law enforcement is involved, attach the
              appropriate mutual legal assistance treaty documents.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h5 className="m-0">
                Where is the capital flow after transaction?
              </h5>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              After the purchase order is completed, the funds will enter the
              French currency account in the asset. If it is necessary to carry
              out contract trading or futures trading for purchased assets,
              please go to the fund transfer module for transfer.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h5 className="m-0">
                Why limit the number of changes to nicknames?
              </h5>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              For the security reasons of your transaction, we currently limit
              the nickname to be modified only once.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h5 className="m-0">
                What do you mean when you transfer? Why do you need to transfer?
              </h5>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              In order to ensure the independence of funds between your accounts
              and facilitate your reasonable risk control, we hereby divide the
              accounts of each major transaction module. Transfer refers to the
              process of assets con between trading accounts.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h5 className="m-0">
                How to calculate your account equity of the user contract?
              </h5>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Contract account equity = position margin position floating profit
              and loss current account available amount
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h5 className="m-0">
                What is the value of your stop loss and profit setting in
                opening a position? How should it be set?
              </h5>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Take profit and stop loss as the upper limit of profit and loss
              set by you. When the set amount of stop profit and stop loss is
              reached, the system will automatically close the position. It can
              be used for risk control when you buy a contract. Half of the set
              profit-taking amount is: amount of increase x quantity x leverage
              multiple, set stop loss. We recommend that you set it according to
              your actual asset situation and reasonably control the risk.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h5 className="m-0">How to reduce contract risk?</h5>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              You can transfer the available assets of the remaining accounts to
              the contract account by transferring funds, or reduce the risk by
              reducing the open positions.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h5 className="m-0">
                What does the quantity in the contract opening mean?
              </h5>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The quantity in the open position represents the number of
              currencies you expect to buy. For example: select on the opening
              page of the BTC/USDT trading pair, buy long, enter the price as
              1000USDT, and enter the amount as 10BTC, it means: you expect to
              buy 10 BTC with a unit price of 1000USDT.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h5 className="m-0">
                How is the handling fee in the contract calculated?
              </h5>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Handling fee=opening price*opening quantity*handling fee rate
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h5 className="m-0">Notes on forced liquidation</h5>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The degree of risk is an indicator to measure the risk of your
              assets. When the degree of risk is equal to 100%, your position is
              regarded as a liquidation, the degree of risk = (holding
              margin/contract account equity)*100%, in order to prevent users
              from wearing Position, the system sets the adjustment ratio of
              risk degree. When the risk degree reaches the risk value set by
              the system, the system will force the position to close. For
              example: the adjustment ratio set by the system is 10%, then when
              your risk degree is greater than or equal to 90%, all your
              positions will be forced to be closed by the system. <br />
              Note: If the system is forced to close the position due to
              excessive risk, it will close all your positions, so I hope you
              can reasonably control your risk to avoid unnecessary losses
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h5 className="m-0">What are the contract trading rules?</h5>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Trading types are divided into two directions: long positions
              (buy) and short positions (sell): <br />
              Buy long (bullish) means that you think that the current index is
              likely to rise, and you want to buy a certain number of certain
              contracts at the price you set or the current market price. <br />
              Sell short (bearish) means that you think that the current index
              is likely to fall, and you want to sell a certain number of new
              contracts at a price you set or the current market price.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h5 className="m-0">
                What is the margin in contract transactions?
              </h5>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              In contract transactions, users can participate in the sale and
              purchase of contracts based on the contract price and quantity,
              and the corresponding leverage multiples. The user will take up
              the margin when opening a position. The more the opening margin
              is, the higher the account risk will be. <br />
              Margin = (opening price * quantity) / leverage multiple
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h5 className="m-0">What are limit order and market order?</h5>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Limit order refers to what price you expect to entrust the
              platform to trade, and market order refers to entrust the platform
              to trade at the current price directly. In the rules for opening
              positions, market orders are given priority over limit orders. If
              you choose a limit order, please open the position reasonably
              according to the current market price of the currency to avoid
              losses due to unreasonable opening prices.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h5 className="m-0">
                What does the risk level of contract transaction represents?
              </h5>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Risk degree is a risk indicator in your contract account. A risk
              degree equal to 100% is considered as a liquidation. We suggest
              that when your risk exceeds 50%, you need to open your position
              carefully to avoid losses due to liquidation. You can reduce your
              risk by replenishing the available funds of contract assets, or
              reducing your positions.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h5 className="m-0">Why is currencty exchange necessary?</h5>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The purpose of the exchange is to allow the smooth circulation of
              funds in different currencies in your assets, and the QCC obtained
              in the futures account can be freely converted into USDT for
              trading. USDT in other accounts can also be freely converted to
              QCC for trading..
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h5 className="m-0">
                Why did the other party not recieve the transfer in time after
                the transactionn was made?
              </h5>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              First of all, please make sure that the payment method you fill in
              when you transfer money is exactly the same as that displayed on
              the order details page. Then please confirm whether your payment
              method is immediate or delayed. Finally, please contact your bank
              and payment institution for system maintenance or other reasons.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h5 className="m-0">How to buy USDT through the platform</h5>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Note: If the purchase order is not paid after 15 minutes, the
              system will automatically cancel the order, please pay in time. If
              the order is cancelled more than 3 times on the same day, the
              transaction cannot be performed again on the same day, and the
              trading authority will be restored the next day
            </div>
          </div>
        </div>
        <div className="pb-5"></div>
        <div className="pb-5"></div>
      </div>
    </div>
  );
};

export default Help;
