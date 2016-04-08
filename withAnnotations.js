// @flow

function foo(x: string, y: number): string {
  return x.length + y;
}

foo('Hello', 32);

function correctfoo1(x: string, y: number): number {
  return x.length + y;
}

correctfoo1('Hello',32);

function correctfoo2(x:string,y:number): string {
  return (x.length + y).toString();
}

correctfoo2('Hello', 32);