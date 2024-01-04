import { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { InputGroup, Row, TabButton } from "./styles";
import ticket from "../../assets/images/boleto.png";
import card from "../../assets/images/cartao.png";

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false);

  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="full-name">Nome completo</label>
              <input id="full-name" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="delivery-email">E-mail</label>
              <input id="delivery-email" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirm-delivery-email">Confirme o e-mail</label>
              <input id="confirm-delivery-email" type="email" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <TabButton
            onClick={() => setPayWithCard(false)}
            isActive={!payWithCard}
          >
            <img src={ticket} alt="Boleto" />
            Boleto bancário
          </TabButton>
          <TabButton
            onClick={() => setPayWithCard(true)}
            isActive={payWithCard}
          >
            <img src={card} alt="Cartão de crédito" />
            Cartão de crédito
          </TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup maxWidth="284px">
                    <label htmlFor="card-owner">
                      Nome do titular do cartão
                    </label>
                    <input id="card-owner" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="284px">
                    <label htmlFor="cpf-card-owner">
                      CPF do titular do cartão
                    </label>
                    <input id="cpf-card-owner" type="text" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="card-display-name">Nome no cartão</label>
                    <input id="card-display-name" type="text" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="card-number">Número do cartão</label>
                    <input id="card-number" type="number" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expires-month">Mês de vencimento</label>
                    <input id="expires-month" type="number" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expires-year">Ano de Vencimento</label>
                    <input id="expires-year" type="number" />
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="card-code">CVV</label>
                    <input id="card-code" type="text" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="150px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select>
                      <option>1x de R$ 200,00</option>
                      <option>2x de R$ 100,00</option>
                      <option>3x de R$ 66,66</option>
                    </select>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar compra
      </Button>
    </div>
  );
};

export default Checkout;
