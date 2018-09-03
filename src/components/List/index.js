import React from 'react';
import { connect } from 'react-redux';
import Head from './Head';
import CardView from './CardView';
import RowView from './RowView';
const ru_monthes = {
  'jun': 'Июнь',
  'jul': 'Июль'
}

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeView: 'rows',
      activeMonths: ['jun']
    }

    this.onViewBtnClick = this.onViewBtnClick.bind(this);
    this.toggleSection = this.toggleSection.bind(this);
  }

  onViewBtnClick(e) {
    debugger;
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
    const self = this;
    const { list } = this.props;
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
            if(self.state.activeMonths.indexOf(month) === -1) return false;

            let ItemView = listViews[self.state.activeView];
            let Items = list[month].map((item) => (
              <ItemView></ItemView>
            ))
            debugger;
            return (
              <div className="list__section-body">
                {Items}
              </div>
            )
          }

          return (
            <section className="list__section">
              <header className="list__section-head">
                <h6 className="list__section-title">{ru_monthes[month]}</h6>
                <span className="list__toggle-btn" data-month={month} onClick={this.toggleSection}>angle</span>
              </header>
              {/*{renderBodySection()}*/}
              {list[month].map((item, i) => (
                <RowView key={i}></RowView>
              ))}
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

export default connect(mapStateToProps, { })(List);
