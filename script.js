function calculatePercentage() {
    const now = new Date();
    const yearStart = new Date(now.getFullYear(), 0, 1);
    const yearEnd = new Date(now.getFullYear() + 1, 0, 1);
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);

    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - now.getDay() + 1); // Start of the week
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 7); // End of the week

    const yearProgress = ((now - yearStart) / (yearEnd - yearStart)) * 100;
    const monthProgress = ((now - monthStart) / (monthEnd - monthStart)) * 100;
    const weekProgress = ((now - weekStart) / (weekEnd - weekStart)) * 100;

    document.getElementById('year').innerText = `Year (${now.getFullYear()}): ${yearProgress.toFixed(1)}% completed`;
    document.getElementById('month').innerText = `Month (${now.toLocaleString('default', { month: 'long' })}): ${monthProgress.toFixed(1)}% completed`;
    document.getElementById('week').innerText = `Week: ${weekProgress.toFixed(1)}% completed`;

    const yearBar = document.getElementById('year-bar');
    const monthBar = document.getElementById('month-bar');
    const weekBar = document.getElementById('week-bar');

    setTimeout(() => {
        yearBar.style.width = yearProgress + '%';
        monthBar.style.width = monthProgress + '%';
        weekBar.style.width = weekProgress + '%';
    }, 100);
}

function calculateCollegeProgress() {
    const now = new Date();
    const collegeEnd = new Date(2027, 3, 30); // End of college April 2027
    const secondYearStart = new Date(2024, 7, 3); // Start of 2nd year August 3, 2024
    const secondYearEnd = new Date(2025, 3, 30); // End of 2nd year April 30, 2025

    const totalCollegeProgress = ((now - new Date(2023, 3, 1)) / (collegeEnd - new Date(2023, 3, 1))) * 100;
    const secondYearProgress = ((now - secondYearStart) / (secondYearEnd - secondYearStart)) * 100;

    document.getElementById('college').innerText = `College: ${totalCollegeProgress.toFixed(1)}% completed`;
    document.getElementById('second-year').innerText = `2nd Year: ${Math.max(secondYearProgress, 0).toFixed(1)}% completed`;

    const collegeBar = document.getElementById('college-bar');
    const secondYearBar = document.getElementById('second-year-bar');

    setTimeout(() => {
        collegeBar.style.width = totalCollegeProgress + '%';
        secondYearBar.style.width = Math.max(secondYearProgress, 0) + '%';
    }, 100);
}

calculatePercentage();
calculateCollegeProgress();
setInterval(calculatePercentage, 60000);
setInterval(calculateCollegeProgress, 60000);