import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, maxLength: number = 15): string {
    if (!value || value.length <= maxLength) {
      return value;
    }

    const truncated = value.slice(0, maxLength - 1); // Truncate at max_length - 1 for ellipsis
    return `${truncated}.`;
  }
}
