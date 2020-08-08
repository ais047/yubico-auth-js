const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');

const { YUBICO_CLIENT_ID, YUBICO_SECRET_KEY } = process.env;

const yubiCloudAPIURL = 'https://api2.yubico.com/wsapi/2.0'
// Verify that it is 32-48 Printable Characters
const captured_OTP = 'ccccccjlhfedgdudcgjicnikrfjufirtcbnehhdnlvbc'
const id = 1;
// 16-40 Character String with Random Unique Data
const nonce = 'aef3a7835277a28da831005c2ae3b919e2076a62'

const main = async () => {
    // const constructedUrl = `${yubiCloudAPIURL}/verify?id=${id}&otp=${captured_OTP}&nonce=${nonce}`;
    // const response = await axios.get(constructedUrl);
    // console.log(response);
    
    // const responsedata = response.data;
    const response = {data: 'h=ejnQ8Vx8gVv2tyX84O5tP1ohJvE=\r\n' +
    't=2020-08-08T00:18:11Z0820\r\n' +
    'otp=ccccccjlhfedgdudcgjicnikrfjufirtcbnehhdnlvbc\r\n' +
    'nonce=aef3a7835277a28da831005c2ae3b919e2076a62\r\n' +
    'sl=100\r\n' +
    'status=OK\r\n' +
    '\r\n'
    };

    const resdata = response.data;
    console.log(resdata);
    const jsonreduce = resdata.split('\r\n');
    let jsondata = {};
    jsonreduce.map(x => {
        const a = x.split(/=(.+)/)
        if(a.length > 1) {
            jsondata[a[0]]= a[1]
        }
        return
    });
    console.log(jsondata)
};

main();