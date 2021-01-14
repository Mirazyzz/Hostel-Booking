import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import 'moment/locale/pl';

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(day, { selected }) {
    if (!selected) {
      this.props.onDayClick(formatDate(day));
    }
  }

  render() {
    return (
      <div>
        <p>Sort by date</p>
        <DayPickerInput
          formatDate={formatDate}
          parseDate={parseDate}
          format="LL"
          placeholder={`${formatDate(new Date())}`}
          dayPickerProps={{
            onDayClick: this.handleDayClick,
            locale: 'PL',
            localeUtils: MomentLocaleUtils,
            fromMonth: new Date(),
            disabledDays: {
              before: new Date(),
            },
          }}
        />
      </div>
    );
  }
}
