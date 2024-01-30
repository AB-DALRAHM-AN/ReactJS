import { calculateInvestmentResults, formatter } from "../util/investment";

export const Results = ({ input }) => {
  const calcResults = calculateInvestmentResults(input);
  let initialInvestment =
    calcResults[0].valueEndOfYear -
    calcResults[0].interest -
    calcResults[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>year</th>
          <th>investment value</th>
          <th>intrest (year)</th>
          <th>total interst</th>
          <th>invested capital</th>
        </tr>
      </thead>
      <tbody>
        {calcResults.map((yearData) => {
          const totalIntrest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          let totalAmountInvestment = yearData.valueEndOfYear - totalIntrest;
          return (
            <tr key={yearData.year}>
              <th>{yearData.year}</th>
              <th>{formatter.format(yearData.valueEndOfYear)}</th>
              <th>{formatter.format(yearData.interest)}</th>
              <th>{formatter.format(totalIntrest)}</th>
              <th>{formatter.format(totalAmountInvestment)}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
