import { Injectable } from '@angular/core';

@Injectable()
export class SortDateFormatterService {

    getDateTime(day: string, hour?: string): any {
        let output;
        if (day) {
            output = new Date(
                +day.split('-')[0],
                +day.split('-')[1] - 1,
                +day.split('-')[2]
            );
            if (hour) {
                output = new Date(
                    +day.split('-')[0],
                    +day.split('-')[1] - 1,
                    +day.split('-')[2],
                    +hour.split(':')[0],
                    +hour.split(':')[1]
                  );
            }
            return output;
        } else {
            return '';
        }
    }

    getTime(date: Date): any {
        return date.getTime();
    }

    formatDateFR(date: Date): any {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        };
        if (date.toLocaleTimeString('fr-FR', options) && date.toLocaleTimeString('fr-FR', options).split(' ')[5]) {
            return date.toLocaleTimeString('fr-FR', options).split(' ').slice(1, 4).join(' ') + ' ' +
            date.toLocaleTimeString('fr-FR', options).split(' ')[5].split(':').slice(0, 2).join('H');
        } else {
            return date.toLocaleTimeString('fr-FR', options).split(' ').slice(1, 4).join(' ') + ' ' +
            date.toLocaleTimeString('fr-FR', options).split(' ')[4].split(':').slice(0, 2).join('H');
        }
    }
}
