import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.header}>
          <th className={s.top}>TYPE</th>
          <th className={s.top}>AMOUNT</th>
          <th className={s.top}>CURRENCY</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={s.tableLine} key={id}>
            <td className={s.tableField}>{type}</td>
            <td className={s.tableField}>{amount}</td>
            <td className={s.tableField}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
