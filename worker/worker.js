import forever from 'forever-monitor';
import path from 'path';

[
  {env: {'PORT': '7000'}, silent: true},
  {env: {'PORT': '7001'}, silent: true},
].forEach((opts, num) => {
  const consumer = new (forever.Monitor)(
    path.resolve(__dirname, './load-consume-taker.js'), opts);

  consumer.on('stderr', (output) => {
    console.log(`[Consumer${num} Error]: ${output}`);
  });

  consumer.on('stdout', (output) => {
    console.log(`[Consumer${num}]: ${output}`);
  });

  consumer.start();
  console.log(`[Worker]: started Conumser${num}`);
});
