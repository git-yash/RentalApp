import {useState} from 'react';

const useSearchView = (props: {setIsSearchFocused: any}) => {
  const [areDatesApplied, setAreDatesApplied] = useState<boolean>(false);
  const [timeText, setTimeText] = useState('Any time');
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>('');
  const [startDateTime, setStartDateTime] = useState<Date | undefined>(
    new Date(),
  );
  const [endDateTime, setEndDateTime] = useState<Date | undefined>(new Date());
  const [areDatesValid, setAreDatesValid] = useState<boolean>(true);
  const formattedDateOptions: Intl.DateTimeFormatOptions = {
    month: 'short', // Short month name (three letters)
    day: 'numeric', // Day of the month
    hour: 'numeric', // Hour
    minute: 'numeric', // Minute
    hour12: true, // Use 12-hour clock
  };

  const onClear = () => {
    setStartDateTime(new Date());
    setEndDateTime(new Date());
    setTimeText('Any time');
  };
  const onApply = () => {
    if (
      !startDateTime ||
      !endDateTime ||
      startDateTime.getTime() >= endDateTime.getTime()
    ) {
      setAreDatesValid(false);
      return;
    }
    setAreDatesApplied(true);
    setAreDatesValid(true);
    let startDateTimeText = startDateTime?.toLocaleString(
      'en-US',
      formattedDateOptions,
    );
    let endDateTimeText = endDateTime?.toLocaleString(
      'en-US',
      formattedDateOptions,
    );
    setTimeText(startDateTimeText + ' to ' + endDateTimeText);
    setIsCollapsed(true);
  };

  const onClearAll = () => {
    setSearchText('');
    setStartDateTime(new Date());
    setEndDateTime(new Date());
    setTimeText('Any time');
  };

  const onSearch = () => {
    // if (!searchText && !areDatesApplied) {
    //   // hide search view, do nothing
    //   props.setIsSearchFocused(false);
    // } else if (!searchText && areDatesApplied) {
    //   // show category tab bar, hide search view, search for rentals with those dates
    //   props.setIsSearchFocused(false);
    // } else if (searchText && !areDatesApplied) {
    //   // hide category tab bar, search for rentals with search string
    //   props.setIsSearchFocused(false);
    // } else {
    //   // hide category tab bar, search for rentals with search string and available dates
    //   props.setIsSearchFocused(false);
    // }
    props.setIsSearchFocused(false);
  };

  return {
    setAreDatesApplied,
    searchText,
    setSearchText,
    setIsCollapsed,
    onSearch,
    isCollapsed,
    timeText,
    onApply,
    setStartDateTime,
    startDateTime,
    onClearAll,
    setEndDateTime,
    endDateTime,
    areDatesValid,
    onClear,
    formattedDateOptions,
    setTimeText,
    setAreDatesValid,
  };
};

export default useSearchView;
