import { Component } from 'react';

import ProductAtributes from '../../lib/ProductAtributes/ProductAtributes';

export default class ProductItemAtributes extends Component {
  state = {
    currentColor: '',
    currentAtribute: {},
  };

  onClickColorButton = color => {
    this.setState({ currentColor: color });
    this.props.choosedColorByUser(color);
  };

  onClickAtributes = (id, sizeAtribute) => {
    this.setState(prev => ({
      currentAtribute: {
        ...prev.currentAtribute,
        [id]: sizeAtribute,
      },
    }));

    this.props.choosedAtributesByUser(id, sizeAtribute);
  };

  render() {
    return (
      <div>
        <ProductAtributes
          visibleFullScreen={this.props.visibleFullScreen}
          onClickAtributes={this.onClickAtributes}
          onClickColorButton={this.onClickColorButton}
          attributes={this.props.attributes}
          name={this.props.name}
          color={this.props.color}
          brand={this.props.brand}
          currentColor={this.state.currentColor}
          currentAtribute={this.state.currentAtribute}
        />
      </div>
    );
  }
}
