import { fakeSites } from "../infra/data-sources/sites";
import { makeLoadSearchSiteController } from "../main/factories/search-site";

test('search sites status code and response', async () => {
    const controller = makeLoadSearchSiteController()
    const httpResponse = await controller.handle('')
    expect(httpResponse.statusCode).toBe(200);
    expect(httpResponse.data).toStrictEqual(fakeSites);
});