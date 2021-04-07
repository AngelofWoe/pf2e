import { compendiumBrowser } from '../packs/compendium-browser';
import { VariantRulesSettings } from './variant-rules';
import { Migrations } from '../migrations';
import { WorldClockSettings } from './world-clock';
import { CharacterPF2e } from '@actor/character';

export function registerSettings() {
    game.settings.register('pf2e', 'worldSchemaVersion', {
        name: 'PF2E.SETTINGS.WorldSchemaVersion.Name',
        hint: 'PF2E.SETTINGS.WorldSchemaVersion.Hint',
        scope: 'world',
        config: true,
        default: Migrations.latestVersion,
        type: Number,
    });
    game.settings.register('pf2e', 'defaultTokenSettings', {
        name: 'PF2E.SETTINGS.DefaultTokenSettings.Name',
        hint: 'PF2E.SETTINGS.DefaultTokenSettings.Hint',
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
    });
    game.settings.register('pf2e', 'defaultTokenSettingsName', {
        name: 'PF2E.SETTINGS.DefaultTokenSettingsName.Name',
        hint: 'PF2E.SETTINGS.DefaultTokenSettingsName.Hint',
        scope: 'world',
        config: true,
        default: CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER,
        type: Number,
        choices: {
            [CONST.TOKEN_DISPLAY_MODES.NONE]: 'TOKEN.DISPLAY_NONE',
            [CONST.TOKEN_DISPLAY_MODES.CONTROL]: 'TOKEN.DISPLAY_CONTROL',
            [CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER]: 'TOKEN.DISPLAY_OWNER_HOVER',
            [CONST.TOKEN_DISPLAY_MODES.HOVER]: 'TOKEN.DISPLAY_HOVER',
            [CONST.TOKEN_DISPLAY_MODES.OWNER]: 'TOKEN.DISPLAY_OWNER',
            [CONST.TOKEN_DISPLAY_MODES.ALWAYS]: 'TOKEN.DISPLAY_ALWAYS',
        },
    });
    game.settings.register('pf2e', 'defaultTokenSettingsBar', {
        name: 'PF2E.SETTINGS.DefaultTokenSettingsBar.Name',
        hint: 'PF2E.SETTINGS.DefaultTokenSettingsBar.Hint',
        scope: 'world',
        config: true,
        default: CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER,
        type: Number,
        choices: {
            [CONST.TOKEN_DISPLAY_MODES.NONE]: 'TOKEN.DISPLAY_NONE',
            [CONST.TOKEN_DISPLAY_MODES.CONTROL]: 'TOKEN.DISPLAY_CONTROL',
            [CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER]: 'TOKEN.DISPLAY_OWNER_HOVER',
            [CONST.TOKEN_DISPLAY_MODES.HOVER]: 'TOKEN.DISPLAY_HOVER',
            [CONST.TOKEN_DISPLAY_MODES.OWNER]: 'TOKEN.DISPLAY_OWNER',
            [CONST.TOKEN_DISPLAY_MODES.ALWAYS]: 'TOKEN.DISPLAY_ALWAYS',
        },
    });
    game.settings.register('pf2e', 'ignoreCoinBulk', {
        name: 'PF2E.SETTINGS.IgnoreCoinBulk.Name',
        hint: 'PF2E.SETTINGS.IgnoreCoinBulk.Hint',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('pf2e', 'ignoreContainerOverflow', {
        name: 'PF2E.SETTINGS.IgnoreContainerOverflow.Name',
        hint: 'PF2E.SETTINGS.IgnoreContainerOverflow.Hint',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('pf2e', 'identifyMagicNotMatchingTraditionModifier', {
        name: 'PF2E.SETTINGS.IdentifyMagicNotMatchingTraditionModifier.Name',
        hint: 'PF2E.SETTINGS.IdentifyMagicNotMatchingTraditionModifier.Hint',
        choices: {
            0: 'PF2E.SETTINGS.IdentifyMagicNotMatchingTraditionModifier.Choices.0',
            2: 'PF2E.SETTINGS.IdentifyMagicNotMatchingTraditionModifier.Choices.2',
            5: 'PF2E.SETTINGS.IdentifyMagicNotMatchingTraditionModifier.Choices.5',
            10: 'PF2E.SETTINGS.IdentifyMagicNotMatchingTraditionModifier.Choices.10',
        },
        type: Number,
        default: 5,
        scope: 'world',
        config: true,
    });
    game.settings.register('pf2e', 'critRule', {
        name: 'PF2E.SETTINGS.CritRule.Name',
        hint: 'PF2E.SETTINGS.CritRule.Hint',
        scope: 'world',
        config: true,
        default: 'doubledamage',
        type: String,
        choices: {
            doubledamage: 'PF2E.SETTINGS.CritRule.Choices.Doubledamage',
            doubledice: 'PF2E.SETTINGS.CritRule.Choices.Doubledice',
        },
    });
    game.settings.register('pf2e', 'compendiumBrowserPacks', {
        name: 'PF2E.SETTINGS.CompendiumBrowserPacks.Name',
        hint: 'PF2E.SETTINGS.CompendiumBrowserPacks.Hint',
        default: '{}',
        type: String,
        scope: 'world',
        onChange: () => {
            compendiumBrowser.loadSettings();
        },
    });
    game.settings.register('pf2e', 'pfsSheetTab', {
        name: 'PF2E.SETTINGS.PFSSheetTab.Name',
        hint: 'PF2E.SETTINGS.PFSSheetTab.Hint',
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
        onChange: () => {
            const actors = game.actors.filter((actor) => actor instanceof CharacterPF2e);
            const sheets = actors.flatMap((actor) => Object.values(actor.apps));
            for (const sheet of sheets) {
                sheet.render();
            }
        },
    });
    game.settings.register('pf2e', 'enabledRulesUI', {
        name: 'PF2E.SETTINGS.EnabledRulesUI.Name',
        hint: 'PF2E.SETTINGS.EnabledRulesUI.Hint',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });

    game.settings.register('pf2e', 'critFumbleButtons', {
        name: game.i18n.localize('PF2E.SETTINGS.critFumbleCardButtons.name'),
        hint: game.i18n.localize('PF2E.SETTINGS.critFumbleCardButtons.hint'),
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
        onChange: () => {
            window.location.reload();
        },
    });

    game.settings.register('pf2e', 'drawCritFumble', {
        name: game.i18n.localize('PF2E.SETTINGS.critFumbleCards.name'),
        hint: game.i18n.localize('PF2E.SETTINGS.critFumbleCards.hint'),
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
        onChange: () => {
            window.location.reload();
        },
    });

    game.settings.registerMenu('pf2e', 'worldClock', {
        name: game.i18n.localize(CONFIG.PF2E.SETTINGS.worldClock.name),
        label: game.i18n.localize(CONFIG.PF2E.SETTINGS.worldClock.label),
        hint: game.i18n.localize(CONFIG.PF2E.SETTINGS.worldClock.hint),
        icon: 'far fa-clock',
        type: WorldClockSettings,
        restricted: true,
    });
    WorldClockSettings.registerSettings();

    game.settings.registerMenu('pf2e', 'variantRules', {
        name: 'PF2E.SETTINGS.Variant.Name',
        label: 'PF2E.SETTINGS.Variant.Label', // The text label used in the button
        hint: 'PF2E.SETTINGS.Variant.Hint',
        icon: 'fas fa-book', // A Font Awesome icon used in the submenu button
        type: VariantRulesSettings, // A FormApplication subclass which should be created
        restricted: true, // Restrict this submenu to gamemaster only?
    });
    VariantRulesSettings.registerSettings();

    // this section starts questionable rule settings, all of them should have a 'rai.' at the start of their name
    game.settings.register('pf2e', 'RAI.TreatWoundsAltSkills', {
        name: 'PF2E.SETTINGS.RAI.TreatWoundsAltSkills.Name',
        hint: 'PF2E.SETTINGS.RAI.TreatWoundsAltSkills.Hint',
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
    });
}
