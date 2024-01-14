import { rand, sleep } from "@utils/utils";

const homeLoader = async () => {
    await sleep();
    return { data: `Home loader - random value ${rand()}` };
}

export default homeLoader;