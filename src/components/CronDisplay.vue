<template>
  <div v-if="display" class="cron-display">
    <div class="cron-section">
      <h3 class="cron-title">Generated CRON Expression</h3>
      <div class="cron-box">
        <code class="cron-code">{{ cronExpression }}</code>
        <button class="copy-btn" @click="copyCron" title="Copy to clipboard">
          📋
        </button>
      </div>
    </div>

    <div class="description-section">
      <h4 class="desc-title">Description</h4>
      <div class="description-box">
        <p class="desc-text">{{ description }}</p>
        <button class="copy-btn" @click="copyDescription" title="Copy to clipboard">
          📋
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CronDisplay',
  props: {
    cronExpression: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    display: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    copyCron() {
      navigator.clipboard.writeText(this.cronExpression);
      alert('CRON expression copied to clipboard!');
    },
    copyDescription() {
      navigator.clipboard.writeText(this.description);
      alert('Description copied to clipboard!');
    }
  }
};
</script>

<style scoped>
.cron-display {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  border-radius: 8px;
  border: 2px solid rgba(102, 126, 234, 0.2);
}

.cron-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 0 0 30%;
}

.cron-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.cron-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: white;
  border-radius: 6px;
  border: 1px solid #ddd;
  flex: 1;
}

.cron-code {
  flex: 1;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  color: #667eea;
  font-weight: 600;
  word-break: break-all;
  margin: 0;
}

.copy-btn {
  flex-shrink: 0;
  padding: 8px 12px;
  border: none;
  background: #f0f0f0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s ease;
}

.copy-btn:hover {
  background: #667eea;
  color: white;
}

.description-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 0 0 70%;
}

.desc-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.description-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: white;
  border-radius: 6px;
  border: 1px solid #ddd;
  flex: 1;
}

.desc-text {
  margin: 0;
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  flex: 1;
  word-break: break-word;
  font-family: 'Courier New', monospace;
  font-weight: 600;
}
</style>
