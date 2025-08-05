import main from './main.js'; // adjust the path if needed

// Mock objects for req, res, log, error
const mockReq = {
  path: '/ping',
};

const mockRes = {
  text: (msg) => console.log('Response.text:', msg),
  json: (obj) => console.log('Response.json:', obj),
};

const mockLog = console.log;
const mockError = console.error;

async function test() {
  await main({
    req: mockReq,
    res: mockRes,
    log: mockLog,
    error: mockError,
  });
}

test();
