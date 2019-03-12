import React from 'react';

export default class ReachBottomSpy extends React.Component {
  ticking = false;

  update() {
    if (typeof document === 'undefined' || typeof window === 'undefined')
      return;

    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight);
    if (distanceToBottom < this.props.threshold) {
      this.props.onReachEnd();
    }
    this.ticking = false;
  }

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true;
      requestAnimationFrame(() => this.update());
    }
  };

  componentDidMount() {
    if (typeof window === 'undefined') return;

    window.addEventListener(`scroll`, this.handleScroll);
  }

  componentWillUnmount() {
    if (typeof window === 'undefined') return;

    window.removeEventListener(`scroll`, this.handleScroll);
  }

  render() {
    return null;
  }
}
