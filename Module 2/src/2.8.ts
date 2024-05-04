/*
 * Title: Asynchronous programming in typescript
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 04-05-2024
 */

{
  const delay = (ms: number): Promise<string> => {
    return new Promise<string>((resolve, reject) => setTimeout(resolve, ms));
  };

  const delayedLog = async (): Promise<void> => {
    await delay(1000);
    console.log("Hello, World!");
  };

  delayedLog();
}
