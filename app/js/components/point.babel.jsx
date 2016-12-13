import { h, Component } from 'preact';
import {bind} from 'decko';

const CLASSES = require('../../css/blocks/point.postcss.css.json');
require('../../css/blocks/point');

class Point extends Component {
  render () {
    const {state} = this.props;
    // const {props} = state;
    const [x, y]  = this._getCoords(state);

    const style = {
      transform: `translate(${x}px, ${y}px)`
    };

    return (
      <div  style={style}
            className={this._getClassName(state)}
            onClick={this._onClick}
            title={state.name}
            data-component="point"></div>
    );
  }

  _getCoords(state) {
    const {x, y} = state.currentProps;

    return [ x, y ];
  }

  _getClassName(state) {
    const selectClass = (state.isSelected) ? CLASSES['is-selected']: '';
    return `${CLASSES['point']} ${selectClass}`;
  }

  @bind
  _onClick(e) {
    const {state} = this.props;
    const {store} = this.context;

    store.dispatch({ type: 'SELECT_POINT', data: state.id });
  }
}

export default Point;
