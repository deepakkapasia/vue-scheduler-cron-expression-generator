/**
 * CRON Expression Generator Utility
 * Converts scheduling options into standard CRON expressions
 */

export class CronGenerator {
  /**
   * Generate CRON expression from scheduling options
   * @param {Date} startDate - The start date and time
   * @param {Object} recurrenceData - Complete recurrence data with frequency and options
   * @returns {String} CRON expression
   */
  static generate(startDate, recurrenceData = {}) {
    if (!startDate) return '';

    const minute = startDate.getMinutes();
    const hour = startDate.getHours();
    const dayOfMonth = startDate.getDate();
    const month = startDate.getMonth() + 1;

    const { frequency, selectedDays, pattern, dayOfMonth: customDayOfMonth, monthPattern, monthPatternDay, yearPattern, yearPatternDay, yearPatternMonth } = recurrenceData;

    switch (frequency) {
      case 'daily':
        return this.generateDaily(minute, hour, selectedDays);
      case 'weekly':
        return this.generateWeekly(minute, hour, selectedDays);
      case 'monthly':
        return this.generateMonthly(minute, hour, dayOfMonth, pattern, monthPattern, monthPatternDay);
      case 'yearly':
        return this.generateYearly(minute, hour, dayOfMonth, month, pattern, yearPattern, yearPatternDay, yearPatternMonth);
      default:
        return '';
    }
  }

  static generateDaily(minute, hour, selectedDays = []) {
    // If weekdays (M-F) selected and not weekends, use 1-5 for Mon-Fri
    const daysShort = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const hasWeekend = selectedDays.includes('S');
    const hasWeekday = selectedDays.some(d => ['M', 'T', 'W', 'F'].includes(d));

    if (hasWeekday && !hasWeekend && selectedDays.length === 5) {
      // Only weekdays: M, T, W, T, F
      return `${minute} ${hour} * * 1-5`;
    } else if (selectedDays.length === 7) {
      // Every day
      return `${minute} ${hour} * * *`;
    } else if (selectedDays.length === 0) {
      return `${minute} ${hour} * * *`;
    } else {
      // Convert day names to cron numbers
      const dayMap = { 'S': 0, 'M': 1, 'T': 2, 'W': 3, 'F': 5, 'F': 5, 'S': 6 };
      const cronDays = selectedDays.map(d => {
        if (d === 'S' && selectedDays.indexOf(d) === 0) return '0'; // First S = Sunday
        if (d === 'S' && selectedDays.indexOf(d) === 6) return '6'; // Last S = Saturday
        if (d === 'M') return '1';
        if (d === 'T' && selectedDays[selectedDays.indexOf(d)] === 'T') return '2';
        if (d === 'W') return '3';
        if (d === 'F') return '5';
        return dayMap[d];
      }).filter((v, i, a) => a.indexOf(v) === i).sort().join(',');
      return `${minute} ${hour} * * ${cronDays}`;
    }
  }

  static generateWeekly(minute, hour, selectedDays = []) {
    // Convert day names to cron day numbers (0=Sunday, 1=Monday, etc.)
    const dayMap = {
      'S': 0,
      'M': 1,
      'T': 2,
      'W': 3,
      'F': 5,
      'S': 6
    };

    if (selectedDays.length === 0) selectedDays = ['M'];

    // Handle duplicate T for Tuesday and Thursday
    const uniqueDays = [];
    const daysShort = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    
    selectedDays.forEach(day => {
      if (day === 'T' && !uniqueDays.includes('T')) {
        uniqueDays.push('T'); // Add once
        // Also add Thursday if needed
        if (selectedDays.filter(d => d === 'T').length >= 2) {
          uniqueDays.push('T'); // This will be treated as Thursday in mapping
        }
      } else if (!uniqueDays.includes(day)) {
        uniqueDays.push(day);
      }
    });

    const cronDays = selectedDays
      .map(d => {
        if (d === 'S') return '0'; // Sunday
        if (d === 'M') return '1';
        if (d === 'T') return '2'; // Tuesday - first occurrence
        if (d === 'W') return '3';
        if (d === 'F') return '5';
        return '0';
      })
      .filter((v, i, a) => a.indexOf(v) === i)
      .sort()
      .join(',');

    return `${minute} ${hour} * * ${cronDays}`;
  }

  static generateMonthly(minute, hour, dayOfMonth, pattern, monthPattern, monthPatternDay) {
    if (pattern === 'dayOfMonth') {
      return `${minute} ${hour} ${dayOfMonth} * *`;
    } else if (pattern === 'pattern') {
      // Simplified: use day of month as approximation
      const patternMap = {
        first: 1,
        second: 8,
        third: 15,
        fourth: 22
      };
      return `${minute} ${hour} ${patternMap[monthPattern] || dayOfMonth} * *`;
    } else if (pattern === 'last') {
      // Last occurrence
      return `${minute} ${hour} L${this.getDayCodeForWeekly(monthPatternDay)} * *`;
    }
    return `${minute} ${hour} ${dayOfMonth} * *`;
  }

  static generateYearly(minute, hour, dayOfMonth, month, pattern, yearPattern, yearPatternDay, yearPatternMonth) {
    const monthNum = this.getMonthNumber(yearPatternMonth);

    if (pattern === 'sameDay') {
      return `${minute} ${hour} ${dayOfMonth} ${month} *`;
    } else if (pattern === 'pattern') {
      const patternMap = {
        first: 1,
        second: 8,
        third: 15,
        fourth: 22
      };
      return `${minute} ${hour} ${patternMap[yearPattern] || dayOfMonth} ${monthNum} *`;
    } else if (pattern === 'last') {
      return `${minute} ${hour} L${this.getDayCodeForWeekly(yearPatternDay)} ${monthNum} *`;
    }

    return `${minute} ${hour} ${dayOfMonth} ${month} *`;
  }

  static getDayCodeForWeekly(dayName) {
    const dayMap = {
      'Sunday': '0',
      'Monday': '1',
      'Tuesday': '2',
      'Wednesday': '3',
      'Thursday': '4',
      'Friday': '5',
      'Saturday': '6'
    };
    return dayMap[dayName] || '0';
  }

  static getMonthNumber(monthName) {
    const months = {
      'January': 1,
      'February': 2,
      'March': 3,
      'April': 4,
      'May': 5,
      'June': 6,
      'July': 7,
      'August': 8,
      'September': 9,
      'October': 10,
      'November': 11,
      'December': 12
    };
    return months[monthName] || 1;
  }

  /**
   * Get human-readable description of recurrence
   */
  static describe(startDate, recurrenceData = {}) {
    const dateStr = startDate?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }) || '';

    const timeStr = startDate?.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }) || '';

    const { frequency, selectedDays, pattern, dayOfMonth, monthPattern, monthPatternDay, yearPattern, yearPatternDay, yearPatternMonth } = recurrenceData;

    switch (frequency) {
      case 'daily':
        if (selectedDays && selectedDays.length === 5 && !selectedDays.includes('S')) {
          return `Every weekday at ${timeStr}, starting ${dateStr}`;
        }
        return `Daily at ${timeStr}, starting ${dateStr}`;

      case 'weekly':
        const daysList = (selectedDays || []).join(', ');
        return `Every week on ${daysList} at ${timeStr}, starting ${dateStr}`;

      case 'monthly':
        if (pattern === 'dayOfMonth') {
          return `On the ${dayOfMonth} of every month at ${timeStr}, starting ${dateStr}`;
        } else if (pattern === 'pattern') {
          return `On the ${monthPattern} ${monthPatternDay} of every month at ${timeStr}, starting ${dateStr}`;
        } else if (pattern === 'last') {
          return `On the last ${monthPatternDay} of every month at ${timeStr}, starting ${dateStr}`;
        }
        return `On the ${dayOfMonth} of every month at ${timeStr}, starting ${dateStr}`;

      case 'yearly':
        if (pattern === 'sameDay') {
          return `Every year on ${dateStr} at ${timeStr}`;
        } else if (pattern === 'pattern') {
          return `On the ${yearPattern} ${yearPatternDay} of ${yearPatternMonth} at ${timeStr}`;
        } else if (pattern === 'last') {
          return `On the last ${yearPatternDay} of ${yearPatternMonth} at ${timeStr}`;
        }
        return `Every year on ${dateStr} at ${timeStr}`;

      default:
        return '';
    }
  }
}

export default CronGenerator;
