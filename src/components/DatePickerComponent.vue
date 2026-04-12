<template>
  <div class="date-picker-container">
    <!-- Clickable Date/Time Display -->
    <div class="date-time-display" @click="showModal = true">
      <div class="display-content">
        <span class="icon">📅</span>
        <div class="text">
          <p class="date-text">{{ formattedDateTime || 'Click to select date & time' }}</p>
        </div>
      </div>
      <span class="chevron">›</span>
    </div>

    <!-- Modal for Date & Time Picker -->
    <b-modal
      v-model="showModal"
      size="sm"
      hide-header
      @ok="handleOk"
      @cancel="handleCancel"
      centered
    >
      <date-picker
        v-model="tempDateTime"
        mode="dateTime"
        :min-date="today"
      />
    </b-modal>
  </div>
</template>

<script>
import {DatePicker} from 'v-calendar'
export default {
  name: 'DatePickerComponent',
  components: {DatePicker},
  emits: ['update:startDateTime'],
  props: {
    modelValue: {
      type: Date,
      default: null
    }
  },
  data() {
    return {
      selectedDateTime: this.modelValue || new Date(),
      tempDateTime: this.modelValue || new Date(),
      today: new Date(),
      showModal: false
    };
  },
  computed: {
    formattedDateTime() {
      if (!this.selectedDateTime) return '';
      const dateStr = this.selectedDateTime.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      const timeStr = this.selectedDateTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      return `${dateStr} at ${timeStr}`;
    }
  },
  methods: {
    handleOk() {
      this.selectedDateTime = this.tempDateTime;
      this.emitUpdates();
      this.showModal = false;
    },
    handleCancel() {
      this.tempDateTime = this.selectedDateTime;
      this.showModal = false;
    },
    emitUpdates() {
      this.$emit('update:startDateTime', this.selectedDateTime);
    }
  },
  watch: {
    modelValue(newValue) {
      if (newValue) {
        this.selectedDateTime = newValue;
        this.tempDateTime = newValue;
      }
    },
    showModal(newValue) {
      if (newValue) {
        this.tempDateTime = new Date(this.selectedDateTime);
      }
    }
  },
  mounted() {
    this.today.setHours(0, 0, 0, 0);
  }
};
</script>

<style scoped>
.date-picker-container {
  width: 100%;
}

.date-time-display {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.date-time-display:hover {
  border-color: #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.display-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon {
  font-size: 24px;
}

.text {
  display: flex;
  flex-direction: column;
}

.date-text {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.chevron {
  font-size: 24px;
  color: #667eea;
}


</style>

