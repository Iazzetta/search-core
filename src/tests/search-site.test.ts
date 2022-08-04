import { fakeSites } from "../infra/data-sources/sites";
import { makeLoadSearchSiteController } from "../main/factories/search-site";

test('search sites status code', async () => {
    const search_text = '';
    const controller = makeLoadSearchSiteController()
    const httpResponse = await controller.handle(search_text)
    expect(httpResponse.statusCode).toBe(200);
});
test('search sites data', async () => {
    const search_text = 'test';
    const controller = makeLoadSearchSiteController()
    const httpResponse = await controller.handle(search_text)
    expect(httpResponse.data).toStrictEqual(fakeSites);
});