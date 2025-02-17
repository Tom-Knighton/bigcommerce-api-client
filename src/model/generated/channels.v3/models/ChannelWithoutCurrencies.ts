/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChannelConfigMeta } from './ChannelConfigMeta';
import type { ChannelDateCreated } from './ChannelDateCreated';
import type { ChannelDateModified } from './ChannelDateModified';
import type { ChannelId } from './ChannelId';
import type { ChannelName } from './ChannelName';
import type { ChannelPlatform } from './ChannelPlatform';
import type { ChannelStatus } from './ChannelStatus';
import type { ChannelType } from './ChannelType';
import type { ExternalId } from './ExternalId';
import type { IconUrl } from './IconUrl';
import type { IsListableFromUI } from './IsListableFromUI';
import type { IsVisible } from './IsVisible';
export type ChannelWithoutCurrencies = {
    config_meta?: ChannelConfigMeta;
    id: ChannelId;
    external_id?: ExternalId;
    is_listable_from_ui?: IsListableFromUI;
    is_visible?: IsVisible;
    status?: ChannelStatus;
    name: ChannelName;
    type?: ChannelType;
    platform?: ChannelPlatform;
    date_created?: ChannelDateCreated;
    date_modified?: ChannelDateModified;
    icon_url?: IconUrl;
};

