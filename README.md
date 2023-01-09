# Crowd funding

## Project Features 

- **Wallet Connect**: It is required for a user to have a cryptocurrency wallet (eg. Metamask) in order to interact with our application. 
- **Campaign Creation**: A user can create a campaign by providing necessary details such as campaign title, campaign description, image URL, target contribution amount, minimum contribution amount and deadline.
- **Contributions**: Donors can browse through our application to search for campaigns that they might be interested in. 
- **Withdrawal Request**: When a vendor wishes to withdraw a certain amount of ether from the pool of money raised so far for their campaign, he has to first create a withdrawal request.
- **Approve Campaign**: When a vendor makes a request for spending money, all the backers will be notified about the Withdrawal Request. So the contributor needs to approve the request if he wants to. One contributor can give only a single vote.
- **Finalize Campaign**: If the vendor is able to reach the 50% approval mark, the ether will be directly transmitted to the verified vendor. In the case where the target contribution amount is not reached, the project will be terminated.


## Tech Stack

| package                                                             | explain                                                               |
| ------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [Next.js](https://nextjs.org/docs/getting-started)                  | For building frontend                                                 |
| [solidity](https://docs.soliditylang.org/en/v0.8.13/)               | For writting smart contracts                                          |
| [tailwind css](https://tailwindcss.com/docs/installation)           | For building design                                                   |       
| [ether.js](https://docs.ethers.io/v5/)                              | Web3 client (contract testing ).                                      |
| [web3.js](https://www.npmjs.com/package/web3)                       | Web3 client (Frontend Next.js).                                       |
| [Chai](https://www.npmjs.com/package/chai)                          | javascript testing framework.                                         |
| [react-toastify](https://www.npmjs.com/package/react-toastify)      | For Notification.                                                     |   
| [hardhat](https://www.npmjs.com/package/hardhat)                    | Ethereum development environment.                                     | 
| [Redux](https://www.npmjs.com/package/hardhat)                      | For managing and centralizing application state.                      |   


----------------


## Running the Application:

- Configure Metamask Settings
    ```
    Network Name: Localhost 8545
    New RPC URL: http://localhost:8545
    Chain ID: 31337
    Currency Symbol: ETH
    ```

- Run hardhat node
    ```
    npx hardhat node
    ```
- Run test cases
    ```
    npx hardhat test
    ```
- Deploy contract in local hardhat node
    ```
    npx hardhat run scripts/deploy.js --network localhost
    ```
- Connect hardhat with metamask
- Run Next.js frontend
    ```
    cd client
    npm run dev
    ```
```
