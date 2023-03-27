import CacheService from "./services/CacheService";

describe("CacheService", () => {
  it("should return the same instance when calling getInstance()", () => {
    const instance1 = CacheService.getInstance();
    const instance2 = CacheService.getInstance();

    expect(instance1).toBe(instance2);
  });

  it("should cache items correctly", () => {
    const cacheService = CacheService.getInstance();

    // Insert items into the cache
    cacheService.cache.set("key1", "value1");
    cacheService.cache.set("key2", "value2");

    // Retrieve items from the cache
    const value1 = cacheService.cache.get("key1");
    const value2 = cacheService.cache.get("key2");

    expect(value1).toEqual("value1");
    expect(value2).toEqual("value2");
  });
});
