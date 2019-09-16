
const EventsHelper = artifacts.require('./EventsHelper.sol');

const receipt = "0xf9035901829f4fb9010004000000000000000000000000004000000040000000000020000000000000000800000000000000000000000000000000000000000000000000000000800020000000000000004000004008000000000000100000000000000000000008000000000000800000000000000000000000000000000000080000000010000008000000000000000000000000000000000040000000800000004000800000000000000000000000000000004000000001000000000000000000000000000080018000000002000000000000000002000000002000000000000000000000000100040000000000000000000000000000000000000000000000000000000000000000f9024bf8389403f23ae1917722d5a27a2ea0bcc98725a2a2a49ae1a0875d966eda6487c7c1a52ef9d6ec077de2fe63a903c4ed02db0d11f4528a001180f89b9403f23ae1917722d5a27a2ea0bcc98725a2a2a49af863a0ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa0000000000000000000000000cd2a3d9f938e13cd947ec05abc7fe734df8dd826a0000000000000000000000000cf7cdbbb5f7ba79d3ffe74a0bba13fc0295f6036a000000000000000000000000000000000000000000000000000000000000003e8f89b9403f23ae1917722d5a27a2ea0bcc98725a2a2a49af863a0ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa00000000000000000000000007986b3df570230288501eea3d890bd66948c9b79a000000000000000000000000039b12c05e8503356e3a7df0b7b33efa4c054c409a000000000000000000000000000000000000000000000000000000000000007d0f89b9403f23ae1917722d5a27a2ea0bcc98725a2a2a49af863a0ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa00000000000000000000000000a3aa774752ec2042c46548456c094a76c7f3a79a0000000000000000000000000c354d97642faa06781b76ffb6786f72cd7746c97a00000000000000000000000000000000000000000000000000000000000000bb8f8389403f23ae1917722d5a27a2ea0bcc98725a2a2a49ae1a030beee9487f19272cea486f3940e1f4a5ce5d4f4fecb20dbf6979d63e695e5d780829f4f01"
const receipt4 = "0xf903b90182a18fb9010004000000000000000000000000000000000040000000000000000000000000000800000000000000000000000000000000000000000000100000000000000000000000000000004000004000000000000000100000000000000000000008000000000000000000008000000000000040000000000000000800000000000008000000000000000000000000000000000000000000800000004000000000000000000000000000000000004000002001000000000000000000000000000080010000000000000000000000000002000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000f902abf8389473ec81da0c72dd112e06c09a6ec03b5544d26f05e1a0875d966eda6487c7c1a52ef9d6ec077de2fe63a903c4ed02db0d11f4528a001180f8bb9473ec81da0c72dd112e06c09a6ec03b5544d26f05f842a0e10e7fce45693f4d605d212ac900b44fa162e7b2d4c7a475cc2f4e63c6987feda0000000000000000000000000cd2a3d9f938e13cd947ec05abc7fe734df8dd826b86000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000004544f4b3100000000000000000000000000000000000000000000000000000000f8bb9473ec81da0c72dd112e06c09a6ec03b5544d26f05f842a0e10e7fce45693f4d605d212ac900b44fa162e7b2d4c7a475cc2f4e63c6987feda00000000000000000000000007986b3df570230288501eea3d890bd66948c9b79b86000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000004544f4b3200000000000000000000000000000000000000000000000000000000f8bb9473ec81da0c72dd112e06c09a6ec03b5544d26f05f842a0e10e7fce45693f4d605d212ac900b44fa162e7b2d4c7a475cc2f4e63c6987feda00000000000000000000000000a3aa774752ec2042c46548456c094a76c7f3a79b86000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000004544f4b3300000000000000000000000000000000000000000000000000000000f8389473ec81da0c72dd112e06c09a6ec03b5544d26f05e1a030beee9487f19272cea486f3940e1f4a5ce5d4f4fecb20dbf6979d63e695e5d78082a18f01"

contract('EventsLibrary', function (accounts) {
    beforeEach(async function () {
        this.helper = await EventsHelper.new();
    });
    
    it('get no transfer events', async function () {
        const result = await this.helper.getTransferEvents(receipt, accounts[0], '0x01');
        
        assert.equal(result.tokens.length, 5);
        assert.equal(result.receivers.length, 5);
        assert.equal(result.amounts.length, 5);
        
        assert.equal(result.amounts[0].toNumber(), 0);
        assert.equal(result.amounts[1].toNumber(), 0);
        assert.equal(result.amounts[2].toNumber(), 0);
        assert.equal(result.amounts[3].toNumber(), 0);
        assert.equal(result.amounts[4].toNumber(), 0);
    });
    
    it('get three transfer events', async function () {
        const result = await this.helper.getTransferEvents(receipt, '0x03f23ae1917722d5a27a2ea0bcc98725a2a2a49a', '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef');
        
        assert.equal(result.tokens.length, 5);
        assert.equal(result.receivers.length, 5);
        assert.equal(result.amounts.length, 5);

        assert.equal(result.amounts[0].toNumber(), 1000);
        assert.equal(result.amounts[1].toNumber(), 2000);
        assert.equal(result.amounts[2].toNumber(), 3000);
        assert.equal(result.amounts[3].toNumber(), 0);
        assert.equal(result.amounts[4].toNumber(), 0);
        
        assert.equal(result.tokens[0].toLowerCase(), '0xcd2a3d9f938e13cd947ec05abc7fe734df8dd826');
        assert.equal(result.tokens[1].toLowerCase(), '0x7986b3df570230288501eea3d890bd66948c9b79');
        assert.equal(result.tokens[2].toLowerCase(), '0x0a3aa774752ec2042c46548456c094a76c7f3a79');
        
        assert.equal(result.receivers[0].toLowerCase(), '0xcf7cdbbb5f7ba79d3ffe74a0bba13fc0295f6036');
        assert.equal(result.receivers[1].toLowerCase(), '0x39b12c05e8503356e3a7df0b7b33efa4c054c409');
        assert.equal(result.receivers[2].toLowerCase(), '0xc354d97642faa06781b76ffb6786f72cd7746c97');
    });
    
    it('get three token events', async function () {
        const result = await this.helper.getTokenEvents(receipt4, '0x73ec81da0c72dd112e06c09a6ec03b5544d26f05', '0xe10e7fce45693f4d605d212ac900b44fa162e7b2d4c7a475cc2f4e63c6987fed');
        
        assert.equal(result.symbols[0], "TOK1");
        assert.equal(result.symbols[1], "TOK2");
        assert.equal(result.symbols[2], "TOK3");
        assert.equal(result.symbols[3], "");
        assert.equal(result.symbols[4], "");
        
        assert.equal(result.tokens[0].toLowerCase(), '0xcd2a3d9f938e13cd947ec05abc7fe734df8dd826');
        assert.equal(result.tokens[1].toLowerCase(), '0x7986b3df570230288501eea3d890bd66948c9b79');
        assert.equal(result.tokens[2].toLowerCase(), '0x0a3aa774752ec2042c46548456c094a76c7f3a79');
        assert.equal(result.tokens[3].toLowerCase(), '0x0000000000000000000000000000000000000000');
        assert.equal(result.tokens[4].toLowerCase(), '0x0000000000000000000000000000000000000000');
    });
});
