import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

// Since a guard is service, it needs to be registered with Angular injector.
@Injectable({
  providedIn: 'root',
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot): boolean {
    let id = +next.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('Invalid product ID');
      this.router.navigate(['/products']);

      return false;
    }
    return true;
  }
}
