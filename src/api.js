// Base URL
const base_url = "https://api.rawg.io/api/games?key=c1cf0dc9813643118b2dda5b3f26c786";

//getting the current month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
}

//getting the day
const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
}

// current day/month/year
const currentYear = new Date().getUTCFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcommingGamesURL = () => `${base_url}${upcomming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

