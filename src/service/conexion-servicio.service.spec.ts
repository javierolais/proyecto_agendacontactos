import { TestBed, inject } from '@angular/core/testing';

import { ConexionServicioService } from './conexion-servicio.service';

describe('ConexionServicioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConexionServicioService]
    });
  });

  it('should be created', inject([ConexionServicioService], (service: ConexionServicioService) => {
    expect(service).toBeTruthy();
  }));
});
