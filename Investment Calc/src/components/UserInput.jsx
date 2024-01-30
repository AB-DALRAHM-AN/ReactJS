export const UserInput = ({userValue, onChange}) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investments</label>
          <input
            type="number"
            required
            defaultValue={userValue.initialInvestment}
            onChange={(e) =>
              onChange("initialInvestment", e.target.value)
            }
          />
        </p>
        <p>
          <label>Anuall Investments</label>
          <input
            type="number"
            required
            defaultValue={userValue.annualInvestment}
            onChange={(e) =>
              onChange("anuallInvestments", e.target.value)
            }
          />
        </p>
        <p>
          <label>Expected Returns</label>
          <input
            type="number"
            required
            defaultValue={userValue.expectedReturn}
            onChange={(e) =>
              onChange("expectedReturns", e.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            defaultValue={userValue.duration}
            onChange={(e) =>
              onChange("duration", e.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
};
