import React from 'react';
import { connect } from 'react-redux';
import Head from './Head';
import CardView from './CardView';
import RowView from './RowView';

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeView: 'rows',
      activeMonths: ['jun']
    }
  }

  onViewBtnClick(e) {
    this.setState({
      activeView: e.target.name
    });
  }

  toggleSection(e) {
    const { month } = e.target.dataset;
    let activeMonths = [...this.state.activeMonths];

    activeMonths.indexOf(month) === -1 ?
      activeMonths.push(month) : 
      activeMonths = activeMonths.filter( (_month) => _month !== month );

    this.setState({
      activeMonths
    });
  }

  render() {
    const list = this.props;
    const months = Object.keys(list);
    const listViews = {
      'cards': CardView,
      'rows': RowView
    }

    return (
      <section className="list">
        <Head onViewBtnClick={this.onViewBtnClick} activeView={this.state.activeView} />
        {months.map((month) => {
          let renderBodySection = () => {
            if(!this.state.activeMonths.indexOf(month) === -1) return false;

            let ItemView = listViews[this.state.view];

            return (
              <div className="list__section-body">
                {list[month].map( (item) => (<ItemView {...item} />) )}
              </div>
            )
          }
          
          return (
            <section className="list__section">
              <header className="list__section-head">
                <h6 className="list__section-title">{ru_monthes[month]}</h6>
                <span className="list__toggle-btn" data-month=`${month}` onClick={this.toggleSection}>angle</span>
              </header>
              {renderBodySection()}
            </section>
          )
        })}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list
});

export default connect(mapStateToProps, { authorize })(Admin);
