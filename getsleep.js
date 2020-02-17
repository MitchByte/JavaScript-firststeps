const getSleepHours = (day) => {
  if (day === 'monday') {
    return 5;
  } 
  else if (day === 'tuesday') {
    return 7;
  } 
  else if (day === 'wednesday') {
    return 7;
  } 
  else if (day === 'thursday') {
    return 7;
  } 
  else if (day === 'friday') {
    return 5;
  } 
  else if (day === 'saturday') {
    return 12;
  } 
  else if (day === 'sunday') {
    return 12;
  } 
  else {
    return 'That is not a day.';
  }
};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours*7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You get perfect amount of sleep');
  } 
  else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + 'more sleep than needed.')
  } 
  else if(actualSleepHours < idealSleepHours)  {
    console.log('You got '+ (idealSleepHours - actualSleepHours) + 'hours less this week. You should get some rest.')
  }
  else {
    console.log('Something went wrong.Check your code.')
  }
};
calculateSleepDebt()
