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
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
      isEmpty: true,
      isDisabled: false,
    };
  }

  handleDayChange(selectedDay, modifiers, dayPickerInput) {
    const input = dayPickerInput.getInput();
    this.setState({
      selectedDay,
      isEmpty: !input.value.trim(),
      isDisabled: modifiers.disabled === true,
    });
  }

  render() {
    const { selectedDay, isDisabled, isEmpty } = this.state;
    return (
      <div>
        <p>Sort by date</p>
        <DayPickerInput
          formatDate={formatDate}
          parseDate={parseDate}
          format="LL"
          placeholder={`${formatDate(new Date())}`}
          dayPickerProps={{
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
