<template>
  <div class="main-explore">
    <div class="header-explore">
      <div class="dataset-details">
        <p>
          <strong>{{ dataset.name }} ({{ dataset.origin }})</strong>
        </p>
      </div>
      <div class="dataset-information">
        <div class="data-info">
          <p>
            <strong>{{ dataset.featuresCount }}</strong>
          </p>
          <p class="tiny-text">
            Features
          </p>
        </div>
        <div class="data-info">
          <p>
            <strong>{{ dataset.dataRecordCount }}</strong>
          </p>
          <p class="tiny-text">
            Records
          </p>
        </div>
        <div class="data-info">
          <p>
            <strong>{{ dataset.featuresSelected }}</strong>
          </p>
          <p class="tiny-text">
            Selected Features
          </p>
        </div>
      </div>
    </div>

    <analysis></analysis>
  </div>
</template>

<script>
import analysis from './analysis';

export default {
  components: {
    analysis,
  },
  data() {
    return {
      dataset: {
        name: 'Name of dataset',
        origin: 'uploaded',
        featuresCount: 17,
        dataRecordCount: 1234,
        featuresSelected: 8,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.main-explore {
  .header-explore {
    .dataset-details,
    .dataset-information {
      align-self: center;
    }
    display: flex;
    flex-direction: row;
    .dataset-information {
      display: flex;
      flex-direction: row;
      margin: 0 auto;
      .data-info {
        margin: 15px;
        p {
          text-align: center;
        }
        p strong {
          font-size: 30px;
        }
      }
    }
  }
}
</style>
