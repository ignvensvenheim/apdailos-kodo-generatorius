/// <reference types="vite/client" />
declare module "ncs-color" {
    export function hex(ncsCode: string): string;
    export function rgb(ncsCode: string): string;
  }