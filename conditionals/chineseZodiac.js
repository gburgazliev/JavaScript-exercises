function chineseZodiac(input) {
  const year = Number(input[0]);
  if (year % 12 == 2000 % 12) {
    console.log('Dragon');
  }
  if (year % 12 == 2001 % 12) {
    console.log('Snake');
  }
  if (year % 12 == 2002 % 12) {
    console.log('Horse');
  }
  if (year % 12 == 2003 % 12) {
    console.log('Sheep');
  }
  if (year % 12 == 2004 % 12) {
    console.log('Monkey');
  }
  if (year % 12 == 2005 % 12) {
    console.log('Rooster');
  }
  if (year % 12 == 2006 % 12) {
    console.log('Dog');
  }
  if (year % 12 == 2007 % 12) {
    console.log('Pig');
  }
  if (year % 12 == 2008 % 12) {
    console.log('Rat');
  }
  if (year % 12 == 2009 % 12) {
    console.log('Ox');
  }
  if (year % 12 == 2010 % 12) {
    console.log('Tiger');
  }
  if (year % 12 == 2011 % 12) {
    console.log('Hare');
  }
}
chineseZodiac(['1975']);
