import {ConfigOptions} from '@datenkraft/bb-base-api-ts-client';
import {SkuUsageApiClient} from '../dist';

describe('Client Test (staging)', () => {
    test('Initialize and use the generated Client', (done) => {
        const configOptions: ConfigOptions = {
            clientId: process.env.DEV_CLIENT_ID ?? '',
            clientSecret: process.env.DEV_CLIENT_SECRET_STAGING ?? '',
            oAuthTokenHost:
                'https://authentication-api.staging.backbone.datenkraft.info',
        };

        SkuUsageApiClient.init(
            configOptions,
            'https://sku-usage-api.staging.backbone.datenkraft.info/v1'
        )
            .then(() => {
                SkuUsageApiClient.Generated.SkuUsageService
                    .getSkuUsage('ba74c99d-d622-4dcd-a1d5-f3db80d0a1c8', 'external_id_test_1')
                    .then((skuUsage) => {
                        expect(skuUsage).toContainEqual({
                            skuUsageId: '00000000-0000-0000-0000-000000000000',
                            skuCode: 'test_sku_code',
                            quantity: 1,
                            projectId: 'ba74c99d-d622-4dcd-a1d5-f3db80d0a1c8',
                            usageStart: '2021-01-01T00:00:00+00:00',
                            usageEnd: '2021-01-01T23:59:59+00:00',
                            externalId: 'external_id_test_1',
                        });
                        done();
                    })
                    .catch((error) => {
                        done(error);
                    });
            })
            .catch((error) => {
                done(error);
            });
    });
});
