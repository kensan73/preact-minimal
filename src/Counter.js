import Preact from 'preact';
/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends Preact.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        Count: {this.state.count}
      </button>
    );
  }
}
export default Counter;
