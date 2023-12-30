import { useState } from "react";
import server from "./server";

function Transfer({ address, setBalance }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [r, setR] = useState("")
  const [s, setS] = useState("")
  const [recovery, setRecovery] = useState("")

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();

    try {
      const {
        data: { balance },
      } = await server.post(`send`, {
        sender: address,
        amount: parseInt(sendAmount),
        recipient,
        r,
        s,
        recovery
      });
      setBalance(balance);
    } catch (ex) {
      alert(ex.response.data.message);
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      {sendAmount && recipient && <span>Sign this message: {`Sending ${sendAmount} to ${recipient}`} <br /> using the sign.js script and paste the output</span>}

      {sendAmount && recipient && <label>
        Signiture
        <input
          placeholder="r"
          value={r}
          onChange={setValue(setR)}
        ></input>
        <input
          placeholder="s"
          value={s}
          onChange={setValue(setS)}
        ></input>
        <input
          placeholder="Recovery"
          value={recovery}
          onChange={setValue(setRecovery)}
        ></input>
      </label>}

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
}

export default Transfer;
