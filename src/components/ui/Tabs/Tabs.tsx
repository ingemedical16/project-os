'use client';

import { useState } from 'react';

import styles from './Tabs.module.scss';

import type { TabsProps } from './Tabs.types';

export function Tabs({
  tabs,
  defaultValue,
}: TabsProps) {
  const firstEnabledTab = tabs.find((tab) => !tab.disabled);

  const [activeTab, setActiveTab] = useState(
    defaultValue ?? firstEnabledTab?.value ?? ''
  );

  const activeContent = tabs.find(
    (tab) => tab.value === activeTab
  )?.content;

  return (
    <div className={styles.tabs}>
      <div className={styles.list} role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            role="tab"
            disabled={tab.disabled}
            aria-selected={activeTab === tab.value}
            className={
              activeTab === tab.value
                ? styles.activeTrigger
                : styles.trigger
            }
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.panel} role="tabpanel">
        {activeContent}
      </div>
    </div>
  );
}