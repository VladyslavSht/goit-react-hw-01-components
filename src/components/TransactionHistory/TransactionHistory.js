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
        {items.map(item => (
          <tr className={s.tableLine} key={item.id}>
            <td className={s.tableField}>{item.type}</td>
            <td className={s.tableField}>{item.amount}</td>
            <td className={s.tableField}>{item.currency}</td>
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
