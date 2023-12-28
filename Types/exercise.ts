const twoFer = (name: string = "you"): string => {
  return `one for ${name}, one for me`
} 

const isLeapYear = (year: number): boolean => {
  return year % 4 === 0 && year % 100!== 0 || year % 400 === 0;
}
